import React, {Component} from 'react';
import  styles from './main.module.scss';
import '../Header/Header'
import SimpleImageSlider from 'react-simple-image-slider'

const images = [
	{ url: 'image/1.png' },
	{ url: 'image/2.png' },
	{ url: 'image/3.png' },
]

class Main extends Component {

	render() {
		return (
			<main>
				<div className={styles.page_1}>
					<h1>ГБУ "Тетюшский лесхоз"</h1>
				</div>

				<div className={styles.page_2} id='page_2'>
					<div className={styles.title}>
						<h3>Об организации </h3>
					</div>
					<div className={styles.content}>
						<div className={styles.block_1}>
							<p>
								Полное название учреждения: Государственное бюджетное учреждение
								Республики Татарстан «Тетюшский лесхоз». ГБУ РТ «Тетюшский
								лесхоз» является специализированным государственным учреждением,
								созданным для осуществления мероприятий по охране, защите и
								воспроизводству лесов с одновременной реализацией лесных
								насаждений для заготовки древесины.
							</p>
						</div>
						<div className={styles.block_2}>
							<div className={styles.director}>
								<p>
									Директор ГБУ РТ «Тетюшский лесхоз» – Халитов Раис Шамилевич
								</p>
							</div>
							<img src='/image/photo_1.png' alt='' />
						</div>
					</div>
				</div>

				<div className={styles.page_3} id='page_3'>
					<div className={styles.title}>
						<h3>Деятельность организации </h3>
					</div>
					<SimpleImageSlider
						width={1050}
						height={550}
						images={images}
						showNavs={true}
						autoPlay={true}
						loop={true}
					/>
				</div>

				<div className={styles.page_4}>
					<div className={styles.title}>
						<h3>Документы</h3>
					</div>
					<div className={styles.documents}>
						<div className={styles.document}>
							<img src='/image/pdf-icon.png' alt='' />
							<a href='https://minleshoz.tatarstan.ru/file/pub/pub_3952465.pdf'>
								Информация для лесопользователей 20.06.2023
							</a>
						</div>
						<div className={styles.document}>
							<img src='/image/pdf-icon.png' alt='' />
							<a href='https://minleshoz.tatarstan.ru/file/pub/pub_3952457.pdf'>
								Лесная декларация на 2024 год-образец
							</a>
						</div>
						<div className={styles.document}>
							<img src='/image/rtf-icon.png' alt='' />
							<a href='/files/pub_3149218.rtf' download>
								Информация для лесопользователей от 01.03.2022
							</a>
						</div>
						<div className={styles.document}>
							<img src='/image/pdf-icon.png' alt='' />

							<a href='https://minleshoz.tatarstan.ru/file/pub/pub_3952465.pdf'>
								Отчет об использовании лесов за 2023 год-образец
							</a>
						</div>
					</div>
				</div>
				<div className={styles.page_5}>
					<div className={styles.title}>
						<h3>Приём Граждан</h3>
					</div>
					<div className={styles.reception}>
						<p>
							Личный прием граждан в Министерстве проводится по адресу: 420124,
							г.Казань, пр.Х.Ямашева, д.37 А. График работы Министерства лесного
							хозяйства Республики Татарстан: понедельник-четверг с 9:00 до
							18:00, обед с 13:00 до 13:45, пятница с 9:00 до 16:45, обед с
							13:00 до 13:45.
						</p>
					</div>
				</div>
				<div className={styles.page_6}>
					<div className={styles.title}>
						<h3>Новости</h3>
					</div>
					<div className={styles.news}>
						<div className={styles.new}>
							<img src='/image/new1.png' alt='' />
							<p>
								Специалисты из Татарстана стали призерами межрегиональных
								конкурсов профессионального мастерства «Лучший вальщик леса» и
								«Лучший машинист харвестера и форвардера»
							</p>
						</div>
						<div className={styles.new}>
							<img src='/image/new2.png' alt='' />
							<p>
								Сотрудниками ГКУ РТ «Елабужское лесничество» демонтированы 80
								рекламных конструкций
							</p>
						</div>
						<div className={styles.new}>
							<img src='/image/new3.png' alt='' />
							<p>Сабантуй в пгт Алексеевское</p>
						</div>
						<div className={styles.new}>
							<img src='/image/new4.png' alt='' />
							<p>
								Участники из Татарстана защитили свои проекты на финальном этапе
								Всероссийского юниорского лесного конкурса «Подрост – 2024»
							</p>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

export default Main;