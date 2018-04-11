class Api::StoriesController < ApplicationController
  def new
    @story = Story.new
  end

  def index
    @stories = Story.all
  end

  def create
    @story = Story.new(story_params)

    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 402
    end
  end

  def show
    @story = Story.find(params[:id])
    render :show
  end

  def update
    # @story = current_user.stories.find(params[:id])
    @story = Story.find(params[:id])
    if @story.update_attributes(story_params)
      render :show
    else
      render json: @story.errors.full_messages, status: 402
    end
  end

  def destroy
    Story.find(params[:id]).destroy
  end

  private

  def story_params
    params.require(:story).permit(:id, :title, :body, :author_id, :image_url)
  end
end
