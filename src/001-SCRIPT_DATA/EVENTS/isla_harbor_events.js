App.Data.Events["IslaHarbor"] = [
    {
        ID: 'BoobpireAttack',
        FROM: 'Any',
        MAX_REPEAT: 0,
        MIN_DAY: 0,
        MAX_DAY: 0,
        COOL: 5,
        PHASE: [ 2, 3, 4],
        PASSAGE: 'BoobpireEvent',
        CHECK: function(p) {
           return ( p.GetStat('BODY', 'Bust') >= 50 && Math.floor(math.random() * 3) == 0);

        }
    },
];