class Api::UpvotesController < ApplicationController
  before_action :require_logged_in

  def create
    @upvote = Upvote.new
    @upvote.user_id = current_user.id
    @upvote.review_id = params[:id]
    unless @upvote.save
      flash[:errors] = @upvote.errors.full_messages
    end
    redirect_to review_url(params[:id])
  end

  def destroy
    @upvote = Upvote.find(params[:id])
    @upvote.destroy
  end

end
