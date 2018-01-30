class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # allows calling these methods within views
  helper_method :current_user, :logged_in?

  private

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  # to be used within user controller and session controller
  def login(user)
    user.reset_session_token
    session[:session_token] = user.session_token
    @current_user = user
  end

  # to be used within session controller when destroying session
  def logout
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil
  end

  # to be used within reviews controller and cars controller before action to make sure
  # users are logged in before they can add reviews or view cars
  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end

end
