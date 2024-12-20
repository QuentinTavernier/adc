import {useTranslation} from "react-i18next";

import {ButtonComponent} from "./ButtonComponent";

export const Contact = () => {
    const {t} = useTranslation();

    const legalNotices = require('../assets/docs/legal_notices.doc');
    const AGMReport = require('../assets/docs/report.pdf');

    return (
        <div className="d-flex-col-reverse center-between">
            <div className="flex flex-col center-center md:end-end gap-2 mt-4">
                <a
                    href={legalNotices}
                    download
                    className="p-text underline"
                >
                    {t('legal_notices')}
                </a>
                <a
                    href={AGMReport}
                    download
                    className="p-text underline"
                >
                    {t('AGM_report')}
                </a>
            </div>
            <div className="flex flex-row gap-2">
                <ButtonComponent
                    icon="facebook"
                    onClick={() => window.open('https://www.facebook.com/auvergnatsducoeur/?locale=fr_FR')}
                />
                <ButtonComponent
                    isLinkedInIcon
                    onClick={() => window.open('https://www.linkedin.com/company/auvergnats-du-coeur/')}
                />
                <ButtonComponent
                    variant="contained"
                    icon="email"
                    onClick={() => window.open('mailto:auvergnatsducoeur@gmail.com')}
                />
            </div>
        </div>
    )
}
