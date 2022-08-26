<div id="filter">
    <div class="filter-top">
        <h3>Anwendung</h3>
        <ul></ul>
    </div>
    <div class="filter-bottom">
        <div class="filter-bottom-left">
            <h3>Geeignet für</h3>
            <ul>
                <li id="light_bun">Brötchen/Weizenbrot Hell</li>
                <li id="special_bun">Körnerbrötchen</li>
                <li id="wheat_bread">Weizenmischbrot</li>
                <li id="rye_bread">Roggenmischbrot</li>
                <li id="grain_bread">Körnerbrot</li>
                <li id="bio">Bio</li>
                <li id="decor">Dekor</li>
                <li id="smell">Geruch Geschmack</li>
                <li id="frische">Frischhaltung</li>
                <li id="volume">Backvolumen</li>
            </ul>
        </div>
        <div class="filter-bottom-middle">
            <h3>Getreidesorte</h3>
            <ul>
                <li id="Gerste" class="cereal">Gerste</li>
                <li id="Weizen" class="cereal">Weizen</li>
                <li id="Dinkel" class="cereal">Dinkel</li>
                <li id="Roggen" class="cereal">Roggen</li>
            </ul>
        </div>
        <div class="filter-bottom-right">
            <h3>Dosierung & Enzymaktivität</h3>
            <ul>
                <li id="dosage"><label>Dosierung</label><input id="dosage-input" type="number" value=""onchange="activeDosage()" min="0" max="100"></li>
                <li id="dk"><label>DK</label><input id="dk_field" type="number" value ="" onchange="activate()" onclick="filterReset()"></li>

            </ul>
        </div>
    </div>

    <button type="submit" class="submit" value="Filter">Filtern</button>
    <button type="submit" class="reset" value="Filter">Filter zürucksetzen</button>

</div>

<script>
    let allProducts = [];
    let product = {

    };
</script>

