
class Team{
    name=null;
    place=null;
}

class FriendlyDetails{
    matchType = "Friendly";
    teams = [];
    startDate = null;
    endDate = null;
    location = null;
    comments = null;
}
class TournamentDetails extends FriendlyDetails{
    matchType = "Tournament";
    tournamentName = null;
}

export {FriendlyDetails, TournamentDetails,Team};