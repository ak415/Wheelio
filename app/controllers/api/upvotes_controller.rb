class Api::UpvotesController < ApplicationController
  before_action :require_logged_in

  def create
    @upvote = Upvote.new
    @upvote.user_id = current_user.id
    @upvote.review_id = params[:review_id]
    if @upvote.save
      render :show
    else
      render json: @upvote.errors.full_messages
    end
  end

  def destroy
    @upvote = Upvote.find(params[:id])
    @upvote.destroy
    render :show

  end

end
