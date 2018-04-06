# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :phoenix_project,
  ecto_repos: [PhoenixProject.Repo]

# Configures the endpoint
config :phoenix_project, PhoenixProject.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "5jNG1w9P3+ZoNvQmWwWXvRpHfWhHXCe8gDaNod+agPwNIKQ3Ky/g/IsM/h68xc/p",
  render_errors: [view: PhoenixProject.ErrorView, accepts: ~w(html json)],
  pubsub: [name: PhoenixProject.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
