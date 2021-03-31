import AddressesInfo, { IAddressesInfo } from 'Entities/AddressesInfo';
import AddressesInfoBeta, { IAddressesInfoBeta } from 'Entities/AddressesInfoBeta';
import CheckConfigRequest, { ICheckConfigRequest } from 'Entities/CheckConfigRequest';
import CheckConfigRequestBeta, { ICheckConfigRequestBeta } from 'Entities/CheckConfigRequestBeta';
import CheckConfigResponse, { ICheckConfigResponse } from 'Entities/CheckConfigResponse';
import InitialConfiguration, { IInitialConfiguration } from 'Entities/InitialConfiguration';
import InitialConfigurationBeta, { IInitialConfigurationBeta } from 'Entities/InitialConfigurationBeta';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export default class InstallApi {
    static async installCheckConfig(checkconfigrequest: ICheckConfigRequest): Promise<ICheckConfigResponse | string[] | Error> {
        const haveError: string[] = [];
        const checkconfigrequestValid = new CheckConfigRequest(checkconfigrequest);
        haveError.push(...checkconfigrequestValid.validate());
        if (haveError.length > 0) {
            return Promise.resolve(haveError);
        }
        return await fetch(`/control/install/check_config`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(checkconfigrequestValid.serialize()),
        }).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async installCheckConfigBeta(checkconfigrequestbeta: ICheckConfigRequestBeta): Promise<ICheckConfigResponse | string[] | Error> {
        const haveError: string[] = [];
        const checkconfigrequestbetaValid = new CheckConfigRequestBeta(checkconfigrequestbeta);
        haveError.push(...checkconfigrequestbetaValid.validate());
        if (haveError.length > 0) {
            return Promise.resolve(haveError);
        }
        return await fetch(`/control/install/check_config_beta`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(checkconfigrequestbetaValid.serialize()),
        }).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async installConfigure(initialconfiguration: IInitialConfiguration): Promise<number | string[] | Error> {
        const haveError: string[] = [];
        const initialconfigurationValid = new InitialConfiguration(initialconfiguration);
        haveError.push(...initialconfigurationValid.validate());
        if (haveError.length > 0) {
            return Promise.resolve(haveError);
        }
        return await fetch(`/control/install/configure`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(initialconfigurationValid.serialize()),
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async installConfigureBeta(initialconfigurationbeta: IInitialConfigurationBeta): Promise<number | string[] | Error> {
        const haveError: string[] = [];
        const initialconfigurationbetaValid = new InitialConfigurationBeta(initialconfigurationbeta);
        haveError.push(...initialconfigurationbetaValid.validate());
        if (haveError.length > 0) {
            return Promise.resolve(haveError);
        }
        return await fetch(`/control/install/configure_beta`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(initialconfigurationbetaValid.serialize()),
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async installGetAddresses(): Promise<IAddressesInfo | Error> {
        return await fetch(`/control/install/get_addresses`, {
            method: 'GET',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async installGetAddressesBeta(): Promise<IAddressesInfoBeta | Error> {
        return await fetch(`/control/install/get_addresses_beta`, {
            method: 'GET',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error(String(res.status));
            }
        })
    }
}
