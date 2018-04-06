defmodule PhoenixProject.PageController do
  use PhoenixProject.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
