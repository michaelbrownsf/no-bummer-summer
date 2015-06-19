class UserActivitiesController < ApplicationController
  before_action :set_user_activity, only: [:show, :edit, :update, :destroy, :user_activity, :user_id, :activity_id, :completed]

  def index
    @user_activities = UserActivity.all
    render json: @user_activities
  end

  def show
  end

  def new
    @user_activity = UserActivity.new
  end

  def edit
  end

  def create
    @user_activity = UserActivity.new(user_activity_params)

    respond_to do |format|
      if @user_activity.save
        format.json { render json: @user_activity, status: :created, location: @user_activity }
      else
        format.json { render json: @user_activity.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @user_activity.update(user_activity_params)
        format.json { render json: @user_activity, status: :ok, location: @user_activity }
      else
        format.json { render json: @user_activity.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @user_activity.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    def set_user_activity
      @user_activity = UserActivity.find(params[:id])
    end

    def user_activity_params
      params.require(:user_activity).permit(:user_id, :activity_id, :completed)
    end
end
