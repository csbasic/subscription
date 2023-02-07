let name = "Serge";

		let hiddenBox = document.querySelector('#autorenew');
		let swichBtn = document.querySelector('.switch-btn');

		if(hiddenBox.value != 0) {
			hiddenBox.checked = true;
			swichBtn.classList.add('switch-on');
		} else {
			hiddenBox.checked = false;
			swichBtn.classList.remove('switch-on');
		}

		function autoRenew(){

			if(hiddenBox.checked == false) {
				// checkedValue.value = 1;
				hiddenBox.checked = true;
				hiddenBox.value = 1;
				swichBtn.classList.add('switch-on');
				
			} else {
				hiddenBox.checked = false;
				hiddenBox.value = 0;
				swichBtn.classList.remove('switch-on');
			}
			console.log(hiddenBox.value);
		}
		
		// <p style="font-size: 8px;">34 days remaining</p>

		function generateStars(){
			const star = document.createElement('img');
			const image = 'assets/uploads/star.png';
			star.setAttribute('src', image);
			star.setAttribute('height', '5');
			star.setAttribute('alt', 'Star');
			star.setAttribute('id', 'star');
			star.setAttribute('style', 'padding: 0');
			return star;
		}
			

		function generateSpan() {
			const span = document.createElement('span');
			span.setAttribute('style', 'width: 3px');
			return span;
		}

		const countStars = 12
		for(let i = 0; i<countStars; i++) {

			document.querySelector('.sets1').appendChild(generateStars());
			if(i+1 == 4){
				document.querySelector('.sets1').appendChild(generateSpan());
				
			} if(i+1 == 8) {
				console.log(i+1);
				document.querySelector('.sets1').appendChild(generateSpan());
				
			}

			if(i+1 == 12) {
				console.log(i+1);
				document.querySelector('.sets1').appendChild(generateSpan());
				
			}
		
		}

		for(let i = 0; i<countStars; i++) {

			document.querySelector('.sets2').appendChild(generateStars());
			if(i+1 == 4){
				document.querySelector('.sets2').appendChild(generateSpan());
				
			} if(i+1 == 8) {
				console.log(i+1);
				document.querySelector('.sets2').appendChild(generateSpan());
				
			}

			if(i+1 == 12) {
				console.log(i+1);
				document.querySelector('.sets2').appendChild(generateSpan());
				
			}

		}


		function para() {
			const par = document.createElement('p');
		par.setAttribute('style', 'font-size: 10px');
		par.setAttribute('color', '#777');

		const note = document.createTextNode('3542');
		par.appendChild(note);
		return par;
		}


		document.querySelector('#sets1').appendChild(para());
		document.querySelector('#sets2').appendChild(para());
		// const attrObject = {'color': '#009CF6', 'position': 'absolute', 'right': 0, 'top': 0, 'margin-top': '-7px', 'margin-right': '-7px','font-size': '10px'}

		/* Deleting class names from a selected card */
		function removeGray(cardType){
			
			if(cardType.contains('pay-cards')) {
				
			console.log('payCards ', cardType.contains('pay-cards'))
			selectedCards = document.querySelectorAll('.pay-cards');
				for(let i = 0; i < selectedCards.length; i++) {
					selectedCards[i].classList.remove('card-border-gray');
					selectedCards[i].classList.remove('card-border-blue');
				}
			} else if(cardType.contains('plan-cards')) {
			console.log('payCards ', cardType.contains('plan-cards'))
			selectedCards = document.querySelectorAll('.plan-cards');
				for(let i = 0; i < selectedCards.length; i++) {
					selectedCards[i].classList.remove('card-border-gray');
					selectedCards[i].classList.remove('card-border-blue');
				}
			}
			
		}


		function addGray(cardsType){
			for(let i = 0; i < cardsType.length; i++) {
				cardsType[i].classList.add('card-border-gray');
			}
		}
		
		let selectedCards
		function selectCard(card){

			let items = document.querySelectorAll('.payment-card');

			// card.classList.add('card-border-blue');
				card.classList.remove('card-border-gray');
			for(let i = 0; i < items.length; i++) {
				items[i].classList.remove('selected-payment-card');
			}

			removeGray(card.classList)
			let elem = card.children[0]
			elem.classList.add('selected-payment-card')
			card.classList.add('card-border-blue');
			addGray(selectedCards)
			console.log(elem)
		}



		function selectPlan(plan){
			
			// plan.children.contains('payment-plan')
			let items = document.querySelectorAll('.payment-plan');
			
			// plan.classList.remove('card-border-gray');
			for(let i = 0; i < items.length; i++) {
				items[i].classList.remove('selected-payment-plan');
			}
			console.log(plan.classList)
			removeGray(plan.classList)
			let elem = plan.children[0]
			elem.classList.add('selected-payment-plan')
			plan.classList.add('card-border-blue');
			console.log(elem)
			addGray(selectedCards)

		}