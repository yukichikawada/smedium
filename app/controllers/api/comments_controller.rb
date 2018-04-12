class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 402
    end
  end

  def index
    @comments = Comment.all
  end

  def destroy
    current_user.comments.params([:id])
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :author_id, :story_id)
  end
end
