class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      # render json: user
      redirect_to root_url, notice: "You logged in successfully! Hooray!"
    else
      flash[:alert] = "Username or email did not match."
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    # render json: session
    redirect_to root_url, notice: "Successfully logged out."
  end

end
