import React, {Component} from 'react';
import styles from './header.module.scss';
class Header extends Component {
    render() {
        return (
					<header>
						<nav className={styles.navtop}>
							<img src={'image/Logo.png'} alt='' className={styles.logo} />
							<img src={'image/loc.png'} alt='' className={styles.loc} />
							<div className={styles.adress}>
								<h3>Адресс: </h3>
								<div className={styles.line}></div>
								<p>
									422370, Республика Татарстан (татарстан), м.р-н Тетюшский,
									г.п. Город Тетюши, г Тетюши, ул Яруллина, д. 2
								</p>
							</div>
							<img
								src={'image/telephone.png'}
								alt=''
								className={styles.img_phone}
							/>
							<div className={styles.phone}>
								<h3>Телефон: </h3>
								<div className={styles.line}></div>
								<p>8 (84373)2-58-14</p>
							</div>
							<button>
								<img
									src={'image/dispetcherr.png'}
									alt=''
									className={styles.dispecthe}
								/>
								Обратная связь
							</button>
						</nav>
						<nav className={styles.navbottom}>
							<ul>
								<li>
									<a href='#page_2'>Об организации</a>
								</li>
								<li>
									<a href='#page_3'>Деятельность организации</a>
								</li>
								<li>
									<a href=''>Документы</a>
								</li>
								<li>
									<a href=''>Приём граждан</a>
								</li>
								<li>
									<a href=''>Новости</a>
								</li>
							</ul>
						</nav>
					</header>
				)
    }
}

export default Header;