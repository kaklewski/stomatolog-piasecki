const testimonials = [
	{
		author: 'Joanna P.',
		text: 'Pan Doktor Wojciech Piasecki jest naprawdę godny polecenia i uważam, że jest najlepszym dentystą w Toruniu. Od wielu lat korzystamy z jego usług. Wszystko dokładnie, bez bólu, w miłej i sympatycznej atmosferze. Gdy boli, zawsze znajdzie się termin, co jest bardzo ważne. Gabinet bardzo czysty, ładny i przyjemny. Piękny uśmiech bez bólu tylko u dr Piaseckiego. Pierwsza klasa! Polecam z całego <3',
	},
	{
		author: 'Michelle O.',
		text: 'Doktor Piasecki to wspaniały specjalista. Profesjonalny, sympatyczny i, co najważniejsze, z ogromną wiedzą i doświadczeniem. To już kolejna moja wizyta u doktora i jak zwykle wychodzę zadowolona. Gabinet może i niewielki, ale jest bardzo nowoczesny, czysty i estetycznie urządzony. Dużym plusem są dla mnie papierowe kubeczki, a nie tak jak w większości gabinetów plastikowe - szczegół, ale świadczy o dbałości o ekologię.',
	},
	{
		author: 'Marcin L.',
		text: 'Świetny lekarz, bardzo kontaktowy. Jeden z najdokładniejszych w Toruniu i, co najważniejsze, bardzo dobry stosunek ceny do jakości. Serdecznie polecam.',
	},
	{
		author: 'Barbara O.',
		text: 'Postanowiłam wykonać u Pana doktora koronki porcelanowe. Trochę obawiałam się szlifowania zębów. Chyba niepotrzebnie, bo wszystko poszło bez problemu. Zero bólu. Jestem bardzo zadowolona z nowego uśmiechu. Wszystkim polecam gabinet Pana doktora Piaseckiego. Ceny bardzo przystępne. Gabinet z nowoczesnym sprzętem. Pan doktor sympatyczny, z poczuciem humoru.',
	},
	{
		author: 'Wioletta O.',
		text: 'Jestem pod dużym wrażeniem profesjonalnego podejścia personelu medycznego w gabinecie doktora Piaseckiego. Panuje w nim sympatyczna atmosfera. Profesjonalne podejście oraz ogromna wiedza fachowa lekarza prowadzącego sprawiły, że czułam się komfortowo. Nie bez znaczenia na moje pozytywne odczucie miały wpływ profesjonalne narzędzia oraz nowoczesne wyposażenie gabinetu. Leczenie kanałowe zostało przeprowadzone bez komplikacji i w dużym komforcie przeciwbólowym.',
	},
	{
		author: 'Marcin B.',
		text: 'Szybko, profesjonalnie, dyskomfort związany z bólem sprowadzony do minimum. Szczerze polecam. Stomatolog z powołania, a nie rzeźnik za pieniądze.',
	},
	{
		author: 'Daria D.',
		text: 'Stomatolog marzenie! Nieprzespane noce, zamartwianie się, unikanie, udawanie, że nie ma problemu oraz wstyd przy szerokim otwieraniu jamy ustnej. To wszystko liczone na lata. Doktor Piasecki ma magiczne umiejętności pozbierania pacjenta do kupy i takiego zorganizowania wokół niego działań, że ani się obejrzałam, a już obudziłam się w innej rzeczywistości wewnątrzustnej. Dziękuję!',
	},
];

const prevBtn = document.querySelector('.testimonials__button--prev');
const nextBtn = document.querySelector('.testimonials__button--next');
let testimonialText = document.querySelector('.testimonials__card__text');
let testimonialAuthor = document.querySelector('.testimonials__card__author');

// Current testimonial
let i = 0;

const displayTestimonial = () => {
	testimonialText.textContent = testimonials[i].text;
	testimonialAuthor.textContent = testimonials[i].author;
};

nextBtn.addEventListener('click', () => {
	i = (testimonials.length + i + 1) % testimonials.length;
	displayTestimonial();
});

prevBtn.addEventListener('click', () => {
	i = (testimonials.length + i - 1) % testimonials.length;
	displayTestimonial();
});
