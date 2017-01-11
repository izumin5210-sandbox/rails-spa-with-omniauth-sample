class SessionsController < ApplicationController
  def create
    @user = User.new
    @account = @user.oauth_accounts.find_or_initialize_by(
      uid: auth_hash['uid'],
      provider: auth_hash['provider']
    )
    unless @account.persisted?
      @account.name = info['name']
      @account.nickname = info['nickname']
      @account.email = info['email']
      case @account.provider
      when 'github'
        @account.url = info['urls']['GitHub']
      end
      @account.image_url = info['image']
      @account.access_token = credentials['token']
      @account.access_secret = credentials['secret']
      @account.credentials = credentials.to_json
      @account.raw_info = auth_hash['extra']['raw_info'].to_json
    end
    @user.name = @account.name
    @user.login_name = @account.nickname
    @user.save!
    redirect_to '/'
  end

  protected

  def auth_hash
    @auth_hash ||= request.env['omniauth.auth']
  end

  def credentials
    @credentials ||= auth_hash['credentials']
  end

  def info
    @info ||= auth_hash['info']
  end
end
