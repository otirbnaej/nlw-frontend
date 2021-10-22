import { VscGithubInverted } from 'react-icons/vsc';

import styles from './styles.module.scss';

export function LoginBox() {
	const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=ff2e483ecf4068907e74`;

	return (
		<div className={styles.loginBoxWrapper}>
			<strong>Entre e compartilhe sua mensagem</strong>
			<a href={signInUrl} className={styles.signInWithGithub}>
				<VscGithubInverted size="24" />
				Entrar com Github
			</a>
		</div>
	);
}
