class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    @review.car_id = params[:car_id]
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end


  def index
    if params[:car_id]
      @reviews = Car.find_by(id: params[:car_id]).reviews
      render :index
    end
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end

  def update
    @review = current_user.reviews.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      redner json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    @review.destroy
  end

  private
  def review_params
    params.require(:review).permit(:body, :car_id, :user_rating)
  end
end
