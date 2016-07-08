class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors, status: 422
    end
  end

  def show
  end
  
  def update
  end

  def destroy
    @review = Review.find(params[:id])
    if @review.destroy
      render :show, status: 200
    else
      @errors = @review.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:user_id, :product_id, :review)
  end



end
