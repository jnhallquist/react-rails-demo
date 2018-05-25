class UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]

  def index
    @users = User.all
    json_response(@users)
  end

  def create
    @user = User.create!(user_params)
    json_response(@user, :created)
  end

  def show
    json_response(@user)
  end

  def update
    @user.update(user_params)
    json_response(@user)
  end

  def destroy
    @user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(
      :first_name,
      :last_name,
      :job_title,
      :phone_number,
      :extension,
      :email,
      :address_1,
      :address_2,
      :postal_code,
      :city,
      :state,
      :country,
      :id
    )
  end

  def set_user
    @user = User.find(params[:id])
  end
end
