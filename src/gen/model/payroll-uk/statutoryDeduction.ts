/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.2.10
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { StatutoryDeductionCategory } from '././statutoryDeductionCategory';

export class StatutoryDeduction {
    /**
    * The Xero identifier for earnings order
    */
    'id'?: string;
    /**
    * Name of the earnings order
    */
    'name'?: string;
    'statutoryDeductionCategory'?: StatutoryDeductionCategory;
    /**
    * Xero identifier for Liability Account
    */
    'liabilityAccountId'?: string;
    /**
    * Identifier of a record is active or not.
    */
    'currentRecord'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "statutoryDeductionCategory",
            "baseName": "statutoryDeductionCategory",
            "type": "StatutoryDeductionCategory"
        },
        {
            "name": "liabilityAccountId",
            "baseName": "liabilityAccountId",
            "type": "string"
        },
        {
            "name": "currentRecord",
            "baseName": "currentRecord",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return StatutoryDeduction.attributeTypeMap;
    }
}

