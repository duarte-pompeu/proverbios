/* The source text should have the following structure:
 * Convention:
 * - 1 proverb per line
 * - capitalization at the beginning
 * - comma (",") PLUS space (" ") between part_1 and part_2
 * - dot (".") and new line at the end
 * 
 * Example:
 * [Proverb_1_part1], [proverb_1_part_2].
 * [Proverb_2_part1], [proverb_2_part_2].
 *					...
 * 
 * How to import from src text to javascript very simply (but not dynamic at all - who cares anyway).
 * $ cat proverbios1.txt | tr '\n' '|' >> proverbs.js
 * $ cat proverbios2.txt | tr '\n' '|' >> proverbs.js
 *				...
 * then just do: var PROVERB_N = "[huge line with proverbs]";
 * you might have to remove extra '|' at the end of the string
 */

var PROVERBS_1 = "A cavalo dado, não se olha o dente.|A casamento e a baptizado, não vás sem ser convidado.|Água mole em pedra dura, tando bate até que fura.|A galinha da vizinha, é sempre melhor que a minha.|A verdade é como o azeite, vem sempre ao de cima.|Em Abril, águas mil.|Patrão fora, dia santo na loja.|Cada um por si, Deus por todos.|Em casa sem pão, todos ralham e ninguém tem razão.|De boas intenções, está o Inferno cheio.|Deitar cedo e cedo erguer, dá saúde e faz crescer.|Diz o roto ao nu, porque não te vestes tu?|Diz com quem andas, dir-te-ei quem tu és.|Em Outubro sê prudente, guarda o pão e guarda a semente.|Em tempo de guerra, todo o buraco é trincheira.|Entre marido e mulher, não metas a colher.|Ladrão que rouba a ladrão, tem 1000 anos de perdão.|Filho de peixe, sabe nador.|Gaivotas em terra, temporal no mar.|Galinha que canta, faca na garganta.|Gato escaldado, de água fria tem medo.|Grão a grão, enche a galinha o papo.|Há mar e mar, há ir e voltar.|Maio frio e Junho quente, bom pão e vinho valente.|Mulher que assobia, ou capa porcos ou trai o marido.|Nevoeiro na serra, chuva na terra.|A cavalo dado, não se olha o dente.|Olho por olho, dente por dente.|Para dar e receber, muito rico é preciso ser.|Para bom entendedor, meia palavra pasta.|Para grandes males, grandes remédios.|Quando a esmola é grande, o santo desconfia.|Se o velho pudesse e o novo quisesse, nada havia que não se fizesse.|Zangam-se as comadres, descobrem-se as verdades.";
var PROVERBS_2 = "Quem acompanha coxo, ao terceiro dia coxeia.|Quem semeia ventos, colhe tempestades.|Quem diz a verdade, não merece castigo.|Quem conta um conto, acrescenta-lhe um ponto.|Quem está de fora, não racha lenha.|Quem muito se abaixa, o cu se lhe vê.|Quem espera, sempre alcança.|Quem cala, consente.|Quem anda à chuva, molha-se.|Quem brinca com o fogo, queima-se.|Quem diz a verdade, não marece castigo.|Quem deve a Pedro e paga a Gaspar, volta a pagar.|Quem é surdo, guarda segredos.|Quem está de fora, não racha lenha.|Quem madruga, Deus ajuda.|Quem mais jura, mais mente.|Quem não tem cão, caça com gato.|Quem parte e reparte e fica com a pior parte, ou é tolo ou não sabe da arte.|Quem sabe do barco, é o barqueiro.|Quem te avisa, teu amigo é.|Quem tem cu, tem medo.|Quem tem telhados de vidro, não deve atirar pedras ao vizinho.|Quem vai ao mar, avia-se em terra.|Quem vê caras, não vê corações.";

var ALL_PROVERBS = [];

ALL_PROVERBS.push(PROVERBS_1);
ALL_PROVERBS.push(PROVERBS_2);

function get_proverb(){
	// 1. Pick variable
	
	var i = randint(1);
	var proverbs = ALL_PROVERBS[i].split("|");
	
	n_proverbs = proverbs.length;
	var rand1 = randint(n_proverbs);
	var rand2 = randint(n_proverbs);
	
	var proverb1 = proverbs[rand1].split(",")[0];
	var proverb2 = proverbs[rand2].split(",")[1];
	
	return proverb1 + "," + proverb2;
}

function randint(max){
	return Math.floor(Math.random() * (max + 1));
}
