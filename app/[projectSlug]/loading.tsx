import classes from './loading.module.css';

export default function ProjectLoadingPage(): React.ReactNode {
    return (
        <div className={classes.loadingFrame}>
            <div className={classes.spinner}></div>
        </div>
    )
}