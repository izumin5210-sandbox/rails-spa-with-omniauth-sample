class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  protected

  def current_user
    token_type, token = request.authorization.try { |h| h.split(/\s+/) }
    payload = decode_token(token, token_type)
    User.find(payload[:user_id])
  rescue ActiveRecord::RecordNotFound
    head :unauthorized
  end

  def encode_token(user)
    payload = {
      sub: user.id,
    }
    JWT.encode(payload, secret_key, JWT_ALGORITHM)
  end

  private

  JWT_ALGORITHM = 'HS512'

  def secret_key
    Rails.application.secrets.secret_key_base
  end

  def decode_token(token)
    payload, _ = JWT.decode(token, secret_key, JWT_ALGORITHM)
    { user_id: payload['sub'],
    }
  end
end
