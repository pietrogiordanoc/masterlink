var input = document.querySelector('.menu');
	var button = document.querySelector('button');	
		button.addEventListener('click', function(e){
			e.preventDefault();
			input.classList.toggle('active');
		})