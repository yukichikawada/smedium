class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
  end

  def create
    @like = Like.new(like_params)

    if @like.save
      @story = Story.find(params[:like][:story_id])
      render 'api/stories/show'
    else
      render json: @like.errors.full_messages, state: 402
    end
  end

  def destroy
    current_user.likes.find(params[:id]).destroy
  end

  private

  def like_params
    params.require(:like).permit(:story_id, :user_id)
  end
end
