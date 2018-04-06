# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :elixirProject,
  ecto_repos: [ElixirProject.Repo]

# Configures the endpoint
config :elixirProject, ElixirProject.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "FezbdpUiUM/cvvmt2DELZKturfVHfioMYILWT130YH0CUBkhXMLaPCORzH5kprX5",
  render_errors: [view: ElixirProject.ErrorView, accepts: ~w(html json)],
  pubsub: [name: ElixirProject.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
