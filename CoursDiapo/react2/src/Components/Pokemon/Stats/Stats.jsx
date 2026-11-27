export function Stats (props) {
    const { hp, atk, def, spe_atk, spe_def, vit } = props.stats;
    const { closeStats } = props;

    return (
        <div onClick={() => closeStats()}>
          <p><strong>Stats :</strong></p>
          <ul>
            <li>PV : {hp}</li>
            <li>Atk : {atk}</li>
            <li>Def : {def}</li>
            <li>Atk Spé : {spe_atk}</li>
            <li>Def Spé : {spe_def}</li>
            <li>Vitesse : {vit}</li>
          </ul>
        </div>
    )
}