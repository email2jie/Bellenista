class Api::ImagesController < ApplicationController
  def index
    @images = Image.all
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      render :show
    else
      render json: @image.errors, status: 422
    end
  end

  def destroy
    @image = Image.find(params[:id])
    if(@image.destroy)
      render :show, status: 200
    else
      @errors = @image.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private
  
  def image_params
    params.require(:image).permit(:name, :description, :url, :thumb_url)
  end
end
