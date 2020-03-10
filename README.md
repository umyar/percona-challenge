# About plugin
Plugin based on [grafana-panel-react-ts-webpack-template](https://github.com/CorpGlory/grafana-panel-react-ts-webpack-template)

# How to test plugin
Plugin is already built, just follow steps:

1) Run the following command in **this repo dir**:
```sh
docker run -d -p 3000:3000 -v "$(pwd)"/dir-for-docker-testing:/var/lib/grafana/plugins --name=grafana-gif grafana/grafana
```
2) Open Grafana in your browser (http://localhost:3000)
3) Create a new dashboard, and select **Choose Visualization** in the **New Panel** view
4) Select **Gif Plugin React** from the list of visualizations