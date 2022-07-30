import styles from './BlogContainer.module.css'

type Props = {
	children: React.ReactNode
}

const BlogContainer = ({ children }: Props) => {
	return (
		<div className={styles.container}>
			{children}
		</div>
	)
}

export default BlogContainer