//Step 1 Count creatures

    const count = data.length;
    console.log(`Count: ${count}`);

    //Step 2 All castles

    const castles = [...new Set(data.map(creature => creature.castle))].sort().map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ');
    console.log(`Castles: ${castles}`);

    //Step 3 Creature with large hp

    const largestHpCreature = data.reduce((prev, curr) => (curr.hp > prev.hp ? curr : prev)).creature;
    console.log(`Largest hp: ${largestHpCreature}`);

    //Step 4 Average damage

    const averageDamage = {};
    data.forEach(creature => {
    const avgDamage = (creature.damage.length === 1) ? creature.damage[0] : (creature.damage[0] + creature.damage[1]) / 2;
    averageDamage[creature.creature] = avgDamage;
    });
    const averageDamageOutput = Object.entries(averageDamage)
    .map(([creature, damage]) => `${creature}: ${damage}`)
    .join(', ');

//Step 5 Strongest creature

    const level7Creatures = data.filter(creature => creature.level === '7');
    const strongestCreature = level7Creatures.reduce((prev, curr) => {
    const avgDamagePrev = (prev.damage[0] + prev.damage[1]) / 2;
    const avgDamageCurr = (curr.damage[0] + curr.damage[1]) / 2;
    const attacksToKillPrev = Math.ceil(curr.hp / avgDamagePrev);
    const attacksToKillCurr = Math.ceil(curr.hp / avgDamageCurr);
    return (attacksToKillCurr < attacksToKillPrev) ? curr : prev;
    }).creature;
    
    

    

