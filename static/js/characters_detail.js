// Characters details

// General information
characters = JSON.parse(localStorage.getItem('characters'))
let name = document.getElementById("fullname").innerHTML;
let characterID = characters.map(characterID => characterID.fullname);
let keyIndex = characterID.findIndex(id => id == name)
character = characters[keyIndex]

// Stats
var hp_stat = parseInt(document.getElementById("hp_stat").value);
var mp_stat = parseInt(document.getElementById("mp_stat").value);
var pwr_stat = parseInt(document.getElementById("pwr_stat").value);
var int_stat = parseInt(document.getElementById("int_stat").value);
var end_stat = parseInt(document.getElementById("end_stat").value);
var spd_stat = parseInt(document.getElementById("spd_stat").value);
var lck_stat = parseInt(document.getElementById("lck_stat").value);
var spr_stat = parseInt(document.getElementById("spr_stat").value);

// Skills MODs
skill_mods = []
for (let s = 0; s < 8; s++) {
    let skill_id = "skill" + s
    skill_mods[s] = parseInt(document.getElementById(skill_id).value.split(' ')[0])
}

// Bonuses
var hp_bonus = mp_bonus = pwr_bonus = int_bonus = spd_bonus = lck_bonus = end_bonus = spr_bonus = 0

function init_count() {
    var ls_count = parseInt(character['count']);

    if (ls_count > 4) {
        bonus1 = document.getElementById('bonus1').getAttribute('data-bonus')
        switch (bonus1) {
            case 'HP':
                hp_bonus += parseInt(document.getElementById('bonus1').value.split(' +')[1])
                break;
            case 'MP':
                mp_bonus += parseInt(document.getElementById('bonus1').value.split(' +')[1])
                break
            case 'PWR':
                pwr_bonus += parseInt(document.getElementById('bonus1').value.split(' +')[1])
                break;
            case 'INT':
                int_bonus += parseInt(document.getElementById('bonus1').value.split(' +')[1])
                break
            case 'END':
                end_bonus += parseInt(document.getElementById('bonus1').value.split(' +')[1])
                break;
            case 'SPD':
                spd_bonus += parseInt(document.getElementById('bonus1').value.split(' +')[1])
                break
            case 'LCK':
                lck_bonus += parseInt(document.getElementById('bonus1').value.split(' +')[1])
                break;
            case 'SPR':
                spr_bonus += parseInt(document.getElementById('bonus1').value.split(' +')[1])
                break
            default:
                console.log('No stat to add found.')
        }
    }

    if (ls_count > 14) {
        bonus2 = document.getElementById('bonus2').getAttribute('data-bonus')
        switch (bonus2) {
            case 'HP':
                hp_bonus += parseInt(document.getElementById('bonus2').value.split(' +')[1])
                break;
            case 'MP':
                mp_bonus += parseInt(document.getElementById('bonus2').value.split(' +')[1])
                break
            case 'PWR':
                pwr_bonus += parseInt(document.getElementById('bonus2').value.split(' +')[1])
                break;
            case 'INT':
                int_bonus += parseInt(document.getElementById('bonus2').value.split(' +')[1])
                break
            case 'END':
                end_bonus += parseInt(document.getElementById('bonus2').value.split(' +')[1])
                break;
            case 'SPD':
                spd_bonus += parseInt(document.getElementById('bonus2').value.split(' +')[1])
                break
            case 'LCK':
                lck_bonus += parseInt(document.getElementById('bonus2').value.split(' +')[1])
                break;
            case 'SPR':
                spr_bonus += parseInt(document.getElementById('bonus2').value.split(' +')[1])
                break
            default:
                console.log('No stat to add found.')
        }
    }

    if (ls_count > 29) {
        bonus3 = document.getElementById('bonus3').getAttribute('data-bonus')
        switch (bonus3) {
            case 'HP':
                hp_bonus += parseInt(document.getElementById('bonus3').value.split(' +')[1])
                break;
            case 'MP':
                mp_bonus += parseInt(document.getElementById('bonus3').value.split(' +')[1])
                break
            case 'PWR':
                pwr_bonus += parseInt(document.getElementById('bonus3').value.split(' +')[1])
                break;
            case 'INT':
                int_bonus += parseInt(document.getElementById('bonus3').value.split(' +')[1])
                break
            case 'END':
                end_bonus += parseInt(document.getElementById('bonus3').value.split(' +')[1])
                break;
            case 'SPD':
                spd_bonus += parseInt(document.getElementById('bonus3').value.split(' +')[1])
                break
            case 'LCK':
                lck_bonus += parseInt(document.getElementById('bonus3').value.split(' +')[1])
                break;
            case 'SPR':
                spr_bonus += parseInt(document.getElementById('bonus3').value.split(' +')[1])
                break
            default:
                console.log('No stat to add found.')
        }
    }

    if (ls_count > 49) {
        bonus4 = document.getElementById('bonus4').getAttribute('data-bonus')
        switch (bonus4) {
            case 'HP':
                hp_bonus += parseInt(document.getElementById('bonus4').value.split(' +')[1])
                break;
            case 'MP':
                mp_bonus += parseInt(document.getElementById('bonus4').value.split(' +')[1])
                break
            case 'PWR':
                pwr_bonus += parseInt(document.getElementById('bonus4').value.split(' +')[1])
                break;
            case 'INT':
                int_bonus += parseInt(document.getElementById('bonus4').value.split(' +')[1])
                break
            case 'END':
                end_bonus += parseInt(document.getElementById('bonus4').value.split(' +')[1])
                break;
            case 'SPD':
                spd_bonus += parseInt(document.getElementById('bonus4').value.split(' +')[1])
                break
            case 'LCK':
                lck_bonus += parseInt(document.getElementById('bonus4').value.split(' +')[1])
                break;
            case 'SPR':
                spr_bonus += parseInt(document.getElementById('bonus4').value.split(' +')[1])
                break
            default:
                console.log('No stat to add found.')
        }
    }

    if (ls_count > 74) {
        bonus5 = document.getElementById('bonus5').getAttribute('data-bonus')
        switch (bonus5) {
            case 'HP':
                hp_bonus += parseInt(document.getElementById('bonus5').value.split(' +')[1])
                break;
            case 'MP':
                mp_bonus += parseInt(document.getElementById('bonus5').value.split(' +')[1])
                break
            case 'PWR':
                pwr_bonus += parseInt(document.getElementById('bonus5').value.split(' +')[1])
                break;
            case 'INT':
                int_bonus += parseInt(document.getElementById('bonus5').value.split(' +')[1])
                break
            case 'END':
                end_bonus += parseInt(document.getElementById('bonus5').value.split(' +')[1])
                break;
            case 'SPD':
                spd_bonus += parseInt(document.getElementById('bonus5').value.split(' +')[1])
                break
            case 'LCK':
                lck_bonus += parseInt(document.getElementById('bonus5').value.split(' +')[1])
                break;
            case 'SPR':
                spr_bonus += parseInt(document.getElementById('bonus5').value.split(' +')[1])
                break
            default:
                console.log('No stat to add found.')
        }
    }

    if (ls_count > 104) {
        bonus6 = document.getElementById('bonus6').getAttribute('data-bonus')
        switch (bonus6) {
            case 'HP':
                hp_bonus += parseInt(document.getElementById('bonus6').value.split(' +')[1])
                break;
            case 'MP':
                mp_bonus += parseInt(document.getElementById('bonus6').value.split(' +')[1])
                break
            case 'PWR':
                pwr_bonus += parseInt(document.getElementById('bonus6').value.split(' +')[1])
                break;
            case 'INT':
                int_bonus += parseInt(document.getElementById('bonus6').value.split(' +')[1])
                break
            case 'END':
                end_bonus += parseInt(document.getElementById('bonus6').value.split(' +')[1])
                break;
            case 'SPD':
                spd_bonus += parseInt(document.getElementById('bonus6').value.split(' +')[1])
                break
            case 'LCK':
                lck_bonus += parseInt(document.getElementById('bonus6').value.split(' +')[1])
                break;
            case 'SPR':
                spr_bonus += parseInt(document.getElementById('bonus6').value.split(' +')[1])
                break
            default:
                console.log('No stat to add found.')
        }
    }

    if (ls_count > 139) {
        bonus7 = document.getElementById('bonus7').getAttribute('data-bonus')
        switch (bonus7) {
            case 'HP':
                hp_bonus += parseInt(document.getElementById('bonus7').value.split(' +')[1])
                break;
            case 'MP':
                mp_bonus += parseInt(document.getElementById('bonus7').value.split(' +')[1])
                break
            case 'PWR':
                pwr_bonus += parseInt(document.getElementById('bonus7').value.split(' +')[1])
                break;
            case 'INT':
                int_bonus += parseInt(document.getElementById('bonus7').value.split(' +')[1])
                break
            case 'END':
                end_bonus += parseInt(document.getElementById('bonus7').value.split(' +')[1])
                break;
            case 'SPD':
                spd_bonus += parseInt(document.getElementById('bonus7').value.split(' +')[1])
                break
            case 'LCK':
                lck_bonus += parseInt(document.getElementById('bonus7').value.split(' +')[1])
                break;
            case 'SPR':
                spr_bonus += parseInt(document.getElementById('bonus7').value.split(' +')[1])
                break
            default:
                console.log('No stat to add found.')
        }
    }

    if (ls_count > 174) {
        bonus8 = document.getElementById('bonus8').getAttribute('data-bonus')
        switch (bonus8) {
            case 'HP':
                hp_bonus += parseInt(document.getElementById('bonus8').value.split(' +')[1])
                break;
            case 'MP':
                mp_bonus += parseInt(document.getElementById('bonus8').value.split(' +')[1])
                break
            case 'PWR':
                pwr_bonus += parseInt(document.getElementById('bonus8').value.split(' +')[1])
                break;
            case 'INT':
                int_bonus += parseInt(document.getElementById('bonus8').value.split(' +')[1])
                break
            case 'END':
                end_bonus += parseInt(document.getElementById('bonus8').value.split(' +')[1])
                break;
            case 'SPD':
                spd_bonus += parseInt(document.getElementById('bonus8').value.split(' +')[1])
                break
            case 'LCK':
                lck_bonus += parseInt(document.getElementById('bonus8').value.split(' +')[1])
                break;
            case 'SPR':
                spr_bonus += parseInt(document.getElementById('bonus8').value.split(' +')[1])
                break
            default:
                console.log('No stat to add found.')
        }
    }

    if (ls_count > 214) {
        bonus9 = document.getElementById('bonus9').getAttribute('data-bonus')
        switch (bonus9) {
            case 'HP':
                hp_bonus += parseInt(document.getElementById('bonus9').value.split(' +')[1])
                break;
            case 'MP':
                mp_bonus += parseInt(document.getElementById('bonus9').value.split(' +')[1])
                break
            case 'PWR':
                pwr_bonus += parseInt(document.getElementById('bonus9').value.split(' +')[1])
                break;
            case 'INT':
                int_bonus += parseInt(document.getElementById('bonus9').value.split(' +')[1])
                break
            case 'END':
                end_bonus += parseInt(document.getElementById('bonus9').value.split(' +')[1])
                break;
            case 'SPD':
                spd_bonus += parseInt(document.getElementById('bonus9').value.split(' +')[1])
                break
            case 'LCK':
                lck_bonus += parseInt(document.getElementById('bonus9').value.split(' +')[1])
                break;
            case 'SPR':
                spr_bonus += parseInt(document.getElementById('bonus9').value.split(' +')[1])
                break
            default:
                console.log('No stat to add found.')
        }
    }

    if (ls_count > 254) {
        bonus10 = document.getElementById('bonus10').getAttribute('data-bonus')
        switch (bonus10) {
            case 'HP':
                hp_bonus += parseInt(document.getElementById('bonus10').value.split(' +')[1])
                break;
            case 'MP':
                mp_bonus += parseInt(document.getElementById('bonus10').value.split(' +')[1])
                break
            case 'PWR':
                pwr_bonus += parseInt(document.getElementById('bonus10').value.split(' +')[1])
                break;
            case 'INT':
                int_bonus += parseInt(document.getElementById('bonus10').value.split(' +')[1])
                break
            case 'END':
                end_bonus += parseInt(document.getElementById('bonus10').value.split(' +')[1])
                break;
            case 'SPD':
                spd_bonus += parseInt(document.getElementById('bonus10').value.split(' +')[1])
                break
            case 'LCK':
                lck_bonus += parseInt(document.getElementById('bonus10').value.split(' +')[1])
                break;
            case 'SPR':
                spr_bonus += parseInt(document.getElementById('bonus10').value.split(' +')[1])
                break
            default:
                console.log('No stat to add found.')
        }
    }
}
init_count();

// Rarity
function init_rarity() {
    var i;
    rarity = [];

    if (character['rarity'] == 'ES') {
        for (i = 0; i < 5; i++) {
            rarity[i] = '<img class="es-star" src="/media/svgs/full_star.svg">'
        }
    }

    else if (character['rarity'] == 'AS') {
        for (i = 0; i < 5; i++) {
            rarity[i] = '<img class="as-star" src="/media/svgs/full_star.svg">'
        }
    }

    else {
        for (i = 0; i < character['rarity']; i++) {
            rarity[i] = '<img class="star-image" src="/media/svgs/full_star.svg">'
        }
    }
}
init_rarity();

$(document).on('click', '.add', function() {
    var weapon_name = $(this).attr('data-name');
    var weapon_icon = $(this).attr('data-icon');
    var weapon_atk = parseInt($(this).attr('data-atk'));
    var weapon_matk = parseInt($(this).attr('data-matk'));

    character['weapon_name'] = weapon_name;
    character['weapon_atk'] = weapon_atk;
    character['weapon_matk'] = weapon_matk;
    character['weapon_icon'] = weapon_icon;
    localStorage.setItem('characters', JSON.stringify(characters));

    render();
});

$(document).on('change', '.badge', function() {

    // Add new data to localStorage Array
    let keyID = $(this).attr('id');
    let characterID = characters.map(characterID => characterID.id);
    let keyIndex = characterID.findIndex(id => id == keyID);
    let badge_name = $(this).attr('class').split(' ')[0]
    console.log(badge_name)
    let value = $(this).val();

    // If value is exceding maximum value
    if (value > 50) {
        value = 50;
    }

    // If value is exceding min value
    if (value < 0) {
        value = 0;
    }

    // Add new value and save to local storage
    characters[keyIndex][badge_name] = value;
    localStorage.setItem('characters', JSON.stringify(characters));

    render();
});

function render() {

    // Total Stats
    total_pwr = `${parseInt(pwr_stat) + parseInt(pwr_bonus) + parseInt(character['pwr_badge'])}`
    total_atk = `${parseInt(total_pwr) + parseInt(character['weapon_atk'])}`
    total_int = `${parseInt(int_stat) + parseInt(int_bonus) + parseInt(character['int_badge'])}`
    total_matk = `${parseInt(total_int) + parseInt(character['weapon_matk'])}`

    $(document).find("#rarity").html('<div>' + rarity.join("") + '</div>');
    $(document).find("#weaponIcon").html('<img src="' + character['weapon_icon'] + '">');
    $(document).find("#weaponName").html(character['weapon_name']);
    $(document).find("#weaponATK").html(character['weapon_atk']);
    $(document).find("#weaponMATK").html(character['weapon_matk']);
    $(document).find("#hp_badge").html('<input type="number" id=' + character['id'] + ' class="hp_badge badge" placeholder=" + ' + character['hp_badge'] + '"/></div>');
    $(document).find("#mp_badge").html('<input type="number" id=' + character['id'] + ' class="mp_badge badge" placeholder=" + ' + character['mp_badge'] + '"/></div>');
    $(document).find("#pwr_badge").html('<input type="number" id=' + character['id'] + ' class="pwr_badge badge" placeholder=" + ' + character['pwr_badge'] + '"/></div>');
    $(document).find("#int_badge").html('<input type="number" id=' + character['id'] + ' class="int_badge badge" placeholder=" + ' + character['int_badge'] + '"/></div>');
    $(document).find("#spd_badge").html('<input type="number" id=' + character['id'] + ' class="spd_badge badge" placeholder=" + ' + character['spd_badge'] + '"/></div>');
    $(document).find("#lck_badge").html('<input type="number" id=' + character['id'] + ' class="lck_badge badge" placeholder=" + ' + character['lck_badge'] + '"/></div>');
    $(document).find("#lsCount").html('<img class="ls_count" src="/media/characters/elements/' + character['ls_type'] + '.png" style="width: 16px" title="' + character['ls_type'] + '"><input type="number" class="ls_count" placeholder=" + ' + character['count'] + '" readonly/>');
    $(document).find("#character_hp").html(`${hp_stat + hp_bonus + parseInt(character['hp_badge'])}`);
    $(document).find("#character_mp").html(`${mp_stat + mp_bonus + parseInt(character['mp_badge'])}`);
    $(document).find("#character_pwr").html(total_pwr);
    $(document).find("#character_int").html(total_int);
    $(document).find("#character_spd").html(`${spd_stat + spd_bonus + parseInt(character['spd_badge'])}`);
    $(document).find("#character_lck").html(`${lck_stat + lck_bonus + parseInt(character['lck_badge'])}`);
    $(document).find("#atk").html(total_atk);
    $(document).find("#matk").html(total_matk);
    $(document).find("#def").html(`${end_stat + end_bonus}`);
    $(document).find("#mdef").html(`${spr_stat + spr_bonus}`);

    // Skills

    let base_PWRn = Math.round((( total_atk - 87 ) * (( total_pwr / 32 ) + 1 ) * 1.75 ) * 100 ) / 100;
    if (base_PWRn < 0) {
      base_PWRn = Math.round(1);
    }

    let base_PWRc = Math.round((( total_atk - 43.5 ) * (( total_pwr / 32 ) + 1 ) * 3.25 ) * 100 ) / 100;
    if (base_PWRc < 0) {
      base_PWRc = Math.round(1);
    }

    let weapon_MOD = Math.round(1);
    let elemental_MOD = Math.round(((( Math.sqrt(( total_matk * 10 ) + 16 ) - 4 ) / 64 ) + 1 ) * 100 ) / 100;

    let min_spread = Math.round(( total_atk * 16 / 25.6 ) * 100) / 100;
    let max_spread = Math.round(( total_atk * 47 / 25.6 ) * 100) / 100;
    let min_normal_PWR = Math.round((base_PWRn * elemental_MOD) + min_spread * weapon_MOD)
    let max_normal_PWR = Math.round((base_PWRn * elemental_MOD) + max_spread * weapon_MOD)
    let min_crit_PWR = Math.round((base_PWRc * elemental_MOD) + min_spread * weapon_MOD)
    let max_crit_PWR = Math.round((base_PWRc * elemental_MOD) + max_spread * weapon_MOD)

    if (character['weapon'].split(' ')[0] == 'Staff') {

        base_PWRn = Math.round((( total_matk - 87 ) * (( total_int / 32 ) + 1 ) * 1.75 ) * 100 ) / 100;
        if (base_PWRn < 0) {
          base_PWRn = Math.round(1);
        }

        base_PWRc = Math.round((( total_matk - 43.5 ) * (( total_int / 32 ) + 1 ) * 3.25 ) * 100 ) / 100;
        if (base_PWRc < 0) {
          base_PWRc = Math.round(1);
        }

        min_spread = Math.round(( total_matk * 32 / 25.6 ) * 100) / 100;
        max_spread = Math.round(( total_matk * 94 / 25.6 ) * 100) / 100;
        min_normal_PWR = Math.round((base_PWRn * elemental_MOD) + min_spread * weapon_MOD)
        max_normal_PWR = Math.round((base_PWRn * elemental_MOD) + max_spread * weapon_MOD)
        min_crit_PWR = Math.round((base_PWRc * elemental_MOD) + min_spread * weapon_MOD)
        max_crit_PWR = Math.round((base_PWRc * elemental_MOD) + max_spread * weapon_MOD)
    }


    // Min DMG
    min_dmg = []
    for (let i = 0; i < 10; i++) {
        min_dmg[i] = Math.round(min_normal_PWR * (skill_mods[i]/100))
        $(document).find("#minDmg" + [i]).html(min_dmg[i]);
    }

    // Max DMG
    max_dmg = []
    for (let i = 0; i < 9; i++) {
        max_dmg[i] = Math.round(max_normal_PWR * (skill_mods[i]/100))
        $(document).find("#maxDmg" + [i]).html(max_dmg[i]);
    }

    //Min Critical DMG
    min_crit_dmg = []
    for (let i = 0; i < 9; i++) {
        min_crit_dmg[i] = Math.round(min_crit_PWR * (skill_mods[i]/100))
        $(document).find("#minCritDmg" + [i]).html(min_crit_dmg[i]);
    }

    //Max Critical DMG
    max_crit_dmg = []
    for (let i = 0; i < 9; i++) {
        max_crit_dmg[i] = Math.round(max_crit_PWR * (skill_mods[i]/100))
        $(document).find("#maxCritDmg" + [i]).html(max_crit_dmg[i]);
    }

    //console.log('Elemental MOD: ', elemental_MOD)
    //console.log('Base PWR normal: ', base_PWRn, 'Base PWR critical: ', base_PWRc)
    //console.log('Min Spread: ', min_spread, 'Max Spread: ', max_spread)
}
render();
