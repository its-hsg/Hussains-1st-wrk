let startTime = Date.now();

        function updateTime() {
            let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            document.getElementById('timeDisplay').textContent = "Elapsed time: " + elapsedTime + " seconds";
        }

        setInterval(updateTime, 1000);
