class SessionController < ApplicationController
  # Show login form
  def new; end

  # Login
  def create
    @user = User.find_by(email: params[:session][:email].downcase)
    if @user
      helpers.log_in @user
      redirect_to root_path
    else
      flash.now[:danger] = 'Email not found. Please sign up.'
      render 'new'
    end
  end

  # Logout
  def destroy
    helpers.log_out if helpers.current_user
    redirect_to root_path
  end
end
