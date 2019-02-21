App.Rogue = App.Rogue || { };

// Player Code.
App.Rogue.Player = function() {

    this._visual = {ch:"@", fg:"deepPink"};
    this._xy = null;
    this._level = null;
    this._speed = 100;
    this._hp = 10;
    this._lightLevel = 1;
    this._lightDuration = 0;

    this._keys = {};
    this._akeys = {};
    //Directions

    //North
    this._keys[ROT.VK_NUMPAD8] = 0;
    this._keys[ROT.VK_UP] = 0; // Arrow Key
    this._akeys[ROT.VK_W] = 0;
    //North East
    this._keys[ROT.VK_NUMPAD9] = 1;
    this._akeys[ROT.VK_E] = 1;
    // East
    this._keys[ROT.VK_NUMPAD6] = 2;
    this._keys[ROT.VK_RIGHT] = 2; // Arrow Key
    this._akeys[ROT.VK_D] = 2;
    // South East
    this._keys[ROT.VK_NUMPAD3] = 3;
    this._akeys[ROT.VK_X] = 3;
    // South
    this._keys[ROT.VK_NUMPAD2] = 4;
    this._keys[ROT.VK_DOWN] = 4; // Arrow Key
    this._akeys[ROT.VK_S] = 4;
    // South West
    this._keys[ROT.VK_NUMPAD1] = 5;
    this._akeys[ROT.VK_Z] = 5;
    // West
    this._keys[ROT.VK_NUMPAD4] = 6;
    this._keys[ROT.VK_LEFT] = 6; // Arrow Key
    this._akeys[ROT.VK_A] = 6;
    // North West
    this._keys[ROT.VK_NUMPAD7] = 7;
    this._akeys[ROT.VK_Q] = 7;

    // Reserved
    this._keys[ROT.VK_PERIOD] = -1;
    this._keys[ROT.VK_CLEAR] = -1;

    // Ascend / Descend / Dig
    this._keys[ROT.VK_NUMPAD5] = -1;
    this._akeys[ROT.VK_R] = -1;

    // Use Torch
    this._keys[ROT.VK_DIVIDE] = -1;
    this._keys[ROT.VK_SLASH] = -1;
    this._akeys[ROT.VK_T] = -1;

    this.act = function() {
        console.log("Player:act() called");
        this._printEntityAtLocationMessage();
        App.Rogue.Engine._textBuffer.flush();
        App.Rogue.Engine._engine.lock();
        $(document).on("keydown", this.handleEvent.bind(this));
    };

    this._printEntityAtLocationMessage = function()
    {
        if (this._level._freeCells.hasOwnProperty(this.getXY().toString()) != true) return;
        var entity = this._level._freeCells[this.getXY()];
        if (typeof entity === 'undefined') return;

        var keyCmd = SugarCube.settings.alternateControlForRogue == true ? "'r'" : 'NUMPAD5';

        switch(entity.GetType()) {
            case null:
                break;
            case 'stairs_up':
                if (this._level._depth > 1) {
                    App.Rogue.Engine._textBuffer.write("Press "+keyCmd+" to ascend a level.");
                } else {
                    App.Rogue.Engine._textBuffer.write("Press "+keyCmd+" to exit.");
                }
                break;
            case 'stairs_down':
                App.Rogue.Engine._textBuffer.write("Press "+keyCmd+" to descend a level.");
                break;
            case 'dig_spot':
                App.Rogue.Engine._textBuffer.write("Press "+keyCmd+" to dig here");
                break;
        }
    };

    this.die = function() {
        App.Rogue.Engine._scheduler.remove(this);
        App.Rogue.Engine.over();
    };

    this.handleEvent = function(e) {

        var keyHandled = this._handleKey(e.keyCode);

        if (keyHandled) {
            $(document).off("keydown");
            App.Rogue.Engine._engine.unlock();
        }
    };

    this._handleKey = function(code) {

        console.log("code="+code);

        var keys = SugarCube.settings.alternateControlForRogue == true ? this._akeys : this._keys;

        if (code in keys) {
            App.Rogue.Engine._textBuffer.clear();

            // Traverse staircase
            if ((code == ROT.VK_NUMPAD5) || (code == ROT.VK_R)) {

                // Handle Up / Down
                if (this.getXY().toString() == this._level.getEntrance().toString()) {
                    if ( setup.player.GetStat("STAT", "Energy") < 1 ) {
                        App.Rogue.Engine._textBuffer.write("You are too tired to climb up.");
                        return 1;
                    }
                    setup.player.AdjustStat("Energy", -1);
                    App.PR.RefreshTwineMeter("Energy");
                    App.Rogue.Engine.Ascend();
                    return true;
                } else if (this.getXY().toString() == this._level.getExit().toString()) {
                    if ( setup.player.GetStat("STAT", "Energy") < 1 ) {
                        App.Rogue.Engine._textBuffer.write("You are too tired to climb down.");
                        return 1;
                    }
                    setup.player.AdjustStat("Energy", -1);
                    App.PR.RefreshTwineMeter("Energy");
                    App.Rogue.Engine.Descend();
                    return true;
                } else if (this._level.isTreasure(this.getXY()) != null ) {

                    if (this.getShovels() > 0 ) {
                        if ( setup.player.GetStat("STAT","Energy") < 1 ) {
                            App.Rogue.Engine._textBuffer.write("You're too tired to dig.");
                            return true;
                        }

                        setup.player.AdjustStat("Energy", -1);
                        App.PR.RefreshTwineMeter("Energy");
                        App.Rogue.Engine._textBuffer.write("You start digging...");
                        this._level.digAt(this.getXY());

                        // Randomly draw down charge.
                        if ( this._level._depth > (Math.random() * 100)) {
                            var shovel = setup.player.GetItemByName("shovel");
                            setup.player.UseItem(shovel.Id);
                            App.Rogue.Engine._textBuffer.write("Your shovel breaks!");
                        }
                        App.Rogue.Engine.RefreshStatus();
                        return true;
                    } else {
                        App.Rogue.Engine._textBuffer.write("Out of shovels!!");
                        return true;
                    }
                }
                return true;
            }

            // Use a light
            if (code == ROT.VK_SLASH || code == ROT.VK_DIVIDE || code == ROT.VK_T) {
                if (this.getTorches() > 0 ) {
                    var torch = setup.player.GetItemByName("torch");
                    setup.player.UseItem(torch.Id); // draw down a charge
                    App.Rogue.Engine._textBuffer.write("You light a torch.");
                    this._lightLevel = 10;
                    this._lightDuration = 100;
                    App.Rogue.Engine._drawWithLight(this._xy);
                    App.Rogue.Engine.RefreshStatus();
                    return true;
                } else {
                    App.Rogue.Engine._textBuffer.write("You don't have any torches!");
                }
            }

            var direction = keys[code];
            if (direction == -1) { /* noop */
                /* FIXME show something? */
                return true;
            }

            var dir = ROT.DIRS[8][direction];
            var xy = this._xy.plus(new App.Rogue.XY(dir[0], dir[1]));

            if (typeof this._level.getFreeCells()[xy] === 'undefined') {
                /* FIXME collision detection */
                return true;
            }

            if (this._lightDuration == 1) App.Rogue.Engine._textBuffer.write("Your torch goes out!");
            if (this._lightDuration > 0) this._lightDuration--;
            if (this._lightDuration < 1) {
                if (SugarCube.settings.alternateControlForRogue == true) {
                    App.Rogue.Engine._textBuffer.write("It is dark. Press 't' to light a torch.");
                } else {
                    App.Rogue.Engine._textBuffer.write("It is dark. Press '/' to light a torch.");
                }
                this._lightLevel = 1;
            }

            this._level.setEntity(this, xy);
            App.Rogue.Engine.redraw(xy);
            return true;
        }

        return false; /* unknown key */
    };

    this.getTorches = function() {
        var torch = setup.player.GetItemByName("torch");
        return typeof torch === 'undefined' ? 0 : torch.Charges();
    };

    this.getShovels = function() {
        var shovel = setup.player.GetItemByName("shovel");
        return typeof shovel === 'undefined' ? 0 : shovel.Charges();
    };

    this.getSpeed = function() {
        return this._speed;
    };

    /** TODO: Actually damage player **/
    this.damage = function(damage) {
        this._hp -= damage;
        if (this._hp <= 0) { this.die(); }
    };

    this.setPosition = function(xy, level) {

        /* came to a currently active level; add self to the scheduler */
        if (level != this._level && level == App.Rogue.Engine._level) {
            App.Rogue.Engine._scheduler.add(this, true);
        }
        this._xy = xy;
        this._level = level;
        return this;
    };

    this.getVisual = function() {
        return this._visual;
    };

    this.getXY = function() {
        return this._xy;
    };

    this.getLevel = function() {
        return this._level;
    };
};
