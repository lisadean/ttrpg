document.addEventListener('DOMContentLoaded', () => {
    const crystals = [
        document.getElementById('crystal-1'),
        document.getElementById('crystal-2'),
        document.getElementById('crystal-3')
    ];
    
    const centralCrystal = document.getElementById('central-crystal');
    const resetButton = document.getElementById('reset-button');

    crystals.forEach(crystal => {
        crystal.addEventListener('click', () => {
            changeColors(crystal);
            checkCentralCrystal();
        });
    });

    resetButton.addEventListener('click', resetPuzzle);

    function changeColors(clickedCrystal) {
        crystals.forEach(crystal => {
            if (crystal === clickedCrystal) {
                cycleColor(crystal, ['green', 'clear', 'black']);
            } else {
                cycleColor(crystal, ['green', 'black', 'clear']);
            }
        });
    }

    function cycleColor(crystal, colors) {
        const currentColor = crystal.classList.contains('green') ? 'green' :
            crystal.classList.contains('clear') ? 'clear' : 'black';
        const newColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
        crystal.classList.remove('green', 'clear', 'black');
        crystal.classList.add(newColor);

        if (allCrystalsSameColor('black')) {
            alert('Trap triggered! You take necrotic damage!');
            resetPuzzle();
        }
    }

    function checkCentralCrystal() {
        if (allCrystalsSameColor('clear')) {
            centralCrystal.classList.remove('green', 'clear', 'black');
            centralCrystal.classList.add('clear');
        }
    }

    function allCrystalsSameColor(color) {
        return crystals.every(crystal => crystal.classList.contains(color));
    }

    function resetPuzzle() {
        crystals.forEach(crystal => {
            crystal.classList.remove('green', 'clear', 'black');
            crystal.classList.add('green');
        });
        centralCrystal.classList.remove('green', 'clear', 'black');
        centralCrystal.classList.add('green');
    }
});
