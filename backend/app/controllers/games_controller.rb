class GamesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        games = Game.all
        render json: games
    end

    def create
        game = Game.create({
            user_id: params[:user_id],
            score: params[:score],
            time: params[:time]
        })
        render json: game
    end

end