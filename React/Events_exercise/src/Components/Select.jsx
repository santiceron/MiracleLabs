import { useState } from "react";

function PrintSelect() {
    
    const [selectedTeam, setSelectedTeam] = useState(null);

    return(
        <>
            <label>
                Pick a football team: 
                <select value={selectedTeam} onChange={e => setSelectedTeam(e.target.value)}>
                    <option value="Boca Juniors">Boca Juniors</option>
                    <option value="Newell's Old Boys">Newell's Old Boys</option>
                    <option value="Rosario Central">Rosario Central</option>
                    <option value="River Plate">River Plate</option>
                    <option value="Estudiantes de La Plata">Estudiantes de La Plata</option>
                </select>
            </label>
            {selectedTeam !== null && <p>Selected team: {selectedTeam}</p>}
        </>
    );
}

export default PrintSelect;