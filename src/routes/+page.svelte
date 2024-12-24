<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/main.webp';
	import welcomeFallback from '$lib/images/main.png';
	import { goto } from '$app/navigation';
	function imsolo() { alert('어머! 전 처음부터 당신이 솔로라는걸 알고있었어요..😛'); goto('/solo'); }
	function imcouple() { alert('헉, 당신은 커플호소인이였군요..😛'); goto('/couple'); }
</script>


<section>
	<h1>
		<span class="flex-container">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcomeFallback} alt="Welcome" class='align-top' />
			</picture>
		</span>

	</h1>
	<div class='full-background'>
		<h1>
			당신은 솔로인가요?
		</h1>
	</div>
	<button class='buttonstyle' type='button' on:click={imsolo}>
		Yes
	</button>
	<button class='buttonstyle' type='button' on:click={imcouple}>
		No
	</button>
	<Counter />
	
</section>
<style>
	.buttonstyle {
		border: 2px solid rgb(130, 130, 130);
		background-color: rgb(255, 255, 255); /* 원하는 배경색으로 설정 */
		width: 100%; /* div의 너비를 설정 */
		height: auto; /* div의 높이를 설정 (예: 뷰포트 높이 전체) */
		padding: 5px; /* 여백을 추가하여 내용이 더 잘 보이도록 */
		box-sizing: border-box; /* 패딩과 보더를 포함한 전체 크기 계산 */
		display: flex; /* 콘텐츠를 중앙에 배치하기 위해 flexbox 사용 */
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		font-size: 2rem;
	
	}
	.full-background {
		border: 2px solid rgb(130, 130, 130);
		background-color: rgb(255, 255, 255); /* 원하는 배경색으로 설정 */
		width: 100%; /* div의 너비를 설정 */
		height: auto; /* div의 높이를 설정 (예: 뷰포트 높이 전체) */
		padding: 5px; /* 여백을 추가하여 내용이 더 잘 보이도록 */
		box-sizing: border-box; /* 패딩과 보더를 포함한 전체 크기 계산 */
		display: flex; /* 콘텐츠를 중앙에 배치하기 위해 flexbox 사용 */
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		
	
	}


	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.flex-container { 
		display: flex;
		flex-direction: column;
	} 
	.align-top {
		align-self: flex-start;
		width: 100%; height: auto;
	}
</style>
