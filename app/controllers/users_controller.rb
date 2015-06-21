class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy, :user, :first_name, :last_name, :email, :profile_pic, :age, :password, :password_confirmation]

  def index
    @users = User.all
    render json: @users
  end

  def show
  end

  def new
    @user = User.new
  end

  def edit
  end

  def create
    @activities = Activity.all
    @user = User.create(user_params)
    @user_activity = UserActivity.create(
      [{user_id: @user.id, activity_id: 1, completed: false},
        {user_id: @user.id, activity_id: 2, completed: false},
        {user_id: @user.id, activity_id: 3, completed: false},
        {user_id: @user.id, activity_id: 4, completed: false},
        {user_id: @user.id, activity_id: 5, completed: false},
        {user_id: @user.id, activity_id: 6, completed: false},
        {user_id: @user.id, activity_id: 7, completed: false},
        {user_id: @user.id, activity_id: 8, completed: false},
        {user_id: @user.id, activity_id: 9, completed: false},
        {user_id: @user.id, activity_id: 10, completed: false}
        ])

    respond_to do |format|
      if @user.save
        format.json { render json: @user, status: :created, location: @user }
      else
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @user.update(user_params)
        format.json { render json: @user, status: :ok, location: @user }
      else
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @user.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :profile_pic, :age, :password, :password_confirmation)
    end

end
