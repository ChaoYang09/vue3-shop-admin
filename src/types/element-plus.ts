import { ElForm, ElTree, FormItemRule, ElDialog } from 'element-plus'

export type TElForm = InstanceType<typeof ElForm>

export type TFormRules = Record<string, FormItemRule[]>
export type IElTree = InstanceType<typeof ElTree>

export type IFormRule = Record<string, FormItemRule[]>

export type IElDialog = InstanceType<typeof ElDialog>
