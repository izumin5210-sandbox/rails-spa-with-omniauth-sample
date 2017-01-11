Rails.application.config.middleware.use OmniAuth::Builder do
  github = Global.secrets.github
  provider :github, github.id, github.secret
end
