import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { Principal } from './public'
import { AppRoutes } from './models'
import { RoutesWithNotFound } from './components'


const AppRouter = ({ t }) => {
    return (
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path='/' element={<Navigate to={AppRoutes.about} />} />
                <Route path={AppRoutes.about} element={<Principal 
                    image="../src/assets/img/IMG-20240115-WA0004.jpg"
                    alt={t('about.alt')}
                    title={t('about.title')}
                    subtitle={t('about.subtitle')}
                    description={t('about.description')}
                    skills="React | JavaScript | HTML | CSS | Node | Express | MongoDB | GIT"
                    link1="https://github.com/Maico-Zurbriggen/Portfolio_react"
                    textLink1={t('about.textLink1')}
                    link2="../src/assets/cv/MaicoZurbriggenCV.pdf"
                    textLink2={t('about.textLink2')}
                />} />
                <Route path={AppRoutes.projects.projectLuigi} element={<Principal 
                    image="../src/assets/img/navbar-brand.svg"
                    alt={t('luigis.alt')}
                    title={t('luigis.title')}
                    subtitle={t('luigis.subtitle')}
                    description={t('luigis.description')}
                    skills="HTML | JavaScript | CSS | GIT"
                    link1="https://github.com/Maico-Zurbriggen/Luigi-s"
                    textLink1={t('luigis.textLink1')}
                    link2="https://maico-zurbriggen.github.io/Luigi-s/"
                    textLink2={t('luigis.textLink2')}    
                />} />
                <Route path={AppRoutes.projects.projectPendingTask} element={<Principal 
                    image="../src/assets/img/pending_task.png"
                    alt={t('pendingTask.alt')}
                    title={t('pendingTask.title')}
                    subtitle={t('pendingTask.subtitle')}
                    description={t('pendingTask.description')}
                    skills="React | JavaScript | CSS | Zod | GIT"
                    link1="https://github.com/Maico-Zurbriggen/pending_task"
                    textLink1={t('pendingTask.textLink1')}
                    link2="https://maico-zurbriggen.github.io/pending_task/"
                    textLink2={t('pendingTask.textLink2')}
                />} />
            </RoutesWithNotFound>
        </BrowserRouter>
    )
}

export default AppRouter;