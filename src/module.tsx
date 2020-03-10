import "./css/panel.dark.scss";
import "./css/panel.light.scss";

import { PanelProps, PanelPlugin } from "@grafana/ui";
import { loadPluginCss } from "grafana/app/plugins/sdk";

import React, { PureComponent } from "react";

import { SearchBar } from "./components/SearchBar";
import { ErrorMessage } from "./components/ErrorMessage";
import { GifsList } from "./components/GifsList";
import { Fetching } from "./components/Fetching";

loadPluginCss({
  dark: "plugins/grafana-panel-template-react-ts-webpack/css/panel.dark.css",
  light: "plugins/grafana-panel-template-react-ts-webpack/css/panel.light.css"
});

type PanelState = {
  error: string;
  gifs: any[];
  isFetching: boolean;
};

export class GifPanel extends PureComponent<PanelProps, PanelState> {
  _panelPath: string;

  state = {
    error: "",
    gifs: [],
    isFetching: false
  };

  onSearch = (searchString: string) => {
    this.setState({ isFetching: true, gifs: [], error: "" });

    const searchStringForUrl = searchString.trim().replace(/\s/g, "+");

    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=O3ACEGRj8Sla9rswZ6t14DTJxefvfO4R&q=${searchStringForUrl}&limit=5&offset=0&rating=G&lang=en`
    )
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          gifs: data.data,
          isFetching: false
        });
      })
      .catch(err => {
        if (!err.json) {
          this.setState({
            error: "Something went wrong...",
            isFetching: false
          });
        } else {
          err.json().then(error => {
            this.setState({ error: error.message, isFetching: false });
          });
        }
      });
  };

  render() {
    const { isFetching, gifs = [], error } = this.state;

    return (
      <div className="panel">
        <SearchBar onSearch={this.onSearch} disabled={isFetching} />
        {isFetching && <Fetching />}
        {gifs.length > 0 && <GifsList gifs={gifs} />}
        {error && <ErrorMessage error={error} />}
      </div>
    );
  }

  get panelPath() {
    if (this._panelPath === undefined) {
      this._panelPath = `public/plugins/grafana-panel-template-react-ts-webpack/`;
    }
    return this._panelPath;
  }
}

export const plugin = new PanelPlugin(GifPanel);
