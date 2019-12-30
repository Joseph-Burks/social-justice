class GamesController < ApllicationController

    def index
        games = Game.all
        render json: games
    end

end