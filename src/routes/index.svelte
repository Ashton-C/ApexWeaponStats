
<script>
import { loop_guard } from "svelte/internal";


    export let weaponClasses = ['Assualt', 'SMG', 'Sniper'];
    export let weaponsAssualt = ['Flatline', 'R-301'];
    export let weaponsSMG = ['R-99', 'Volt']
    export let weaponsSniper = ['Sentinel', 'Longbow']
</script>


<h1 class='header'>Welcome to ApexWeaponStats</h1>
<div class='weaponNavbuttons-full'>
    <ol class='weaponClasses'>
        {#each weaponClasses as wepclass}
            <li class='weaponClass {wepclass}'>
                <ul class='weapons-{wepclass}'>
                    {#each weaponsSniper as weapon}
                        <li class='weapon {weapon}'>{weapon} Icon</li>
                    {/each}
                </ul>
            </li>
        {/each}
        <li class='weaponClass assault'>
            <ul class='weapons-assualt'>
                <li class='weapon flatline'>Flatline Icon</li>
                <li class='weapon r301'>R-301 Icon</li>
            </ul>
        </li>
        <li class='weaponClass sniper'>
            <ul class='weapons-sniper'>
                <li class='weapon sentinel'>Sentinel Icon</li>
                <li class='weapon longbow'>Longbow Icon</li>
            </ul>
        </li>
        <li class='weaponClass submachine'>
            <ul class='weapons-submachine'>
                <li class='weapon r-99'>R99 Icon</li>
                <li class='weapon volt'>Volt Icon</li>
            </ul>
        </li>
    </ol>
</div>

