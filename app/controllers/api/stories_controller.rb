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
      render json: @story.errors.full_messages, status: 401
    end
  end

  def edit
    @story = story_of_user

    if @story
      render :show
    else
      flash[:errors] = @story.errors.full_messages
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
      flash[:errors] = @story.errors.full_messages
    end
  end

  def destroy
    story_of_user.destroy
  end

  private

  def story_of_user
    debugger
    current_user.stories.find(params[:id])
  end

  def story_params
    params.require(:story).permit(:title, :body, :author_id)
  end
end
