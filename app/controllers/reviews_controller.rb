class ReviewsController < ApplicationController
  def show
    key = Figaro.env.GR_API_KEY
    id = params[:id]
    #@results = HTTParty.get("https://www.goodreads.com/book/show/#{id}.json?key=#{key}")
    #render json: @results, status: :ok
  end
end
