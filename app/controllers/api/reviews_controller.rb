class Api::ReviewsController < ApplicationController
  before_action :require_logged_in
  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    @review.car_id = params[:car_id]
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages
    end
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end

  def update
    @review = current_user.reviews.find_by(id: params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    @review.destroy
  end

  private
  def review_params
    params.require(:review).permit(:body, :user_rating, :upvotes)
  end
end
