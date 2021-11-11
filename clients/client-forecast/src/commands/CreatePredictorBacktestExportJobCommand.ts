import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { CreatePredictorBacktestExportJobRequest, CreatePredictorBacktestExportJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreatePredictorBacktestExportJobCommand,
  serializeAws_json1_1CreatePredictorBacktestExportJobCommand,
} from "../protocols/Aws_json1_1";

export interface CreatePredictorBacktestExportJobCommandInput extends CreatePredictorBacktestExportJobRequest {}
export interface CreatePredictorBacktestExportJobCommandOutput
  extends CreatePredictorBacktestExportJobResponse,
    __MetadataBearer {}

/**
 * <p>Exports backtest forecasts and accuracy metrics generated by the <a>CreatePredictor</a> operation. Two folders containing CSV files are exported
 *             to your specified S3 bucket.</p>
 *         <p> The export file names will match the following conventions:</p>
 *         <p>
 *             <code><ExportJobName>_<ExportTimestamp>_<PartNumber>.csv</code>
 *          </p>
 *         <p>The <ExportTimestamp> component is in Java SimpleDate format
 *             (yyyy-MM-ddTHH-mm-ssZ).</p>
 *         <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3
 *             bucket and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3
 *             bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p>
 *         <note>
 *             <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before
 *                 you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribePredictorBacktestExportJob</a> operation.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreatePredictorBacktestExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreatePredictorBacktestExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreatePredictorBacktestExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePredictorBacktestExportJobCommandInput} for command's `input` shape.
 * @see {@link CreatePredictorBacktestExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class CreatePredictorBacktestExportJobCommand extends $Command<
  CreatePredictorBacktestExportJobCommandInput,
  CreatePredictorBacktestExportJobCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePredictorBacktestExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePredictorBacktestExportJobCommandInput, CreatePredictorBacktestExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreatePredictorBacktestExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePredictorBacktestExportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePredictorBacktestExportJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreatePredictorBacktestExportJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePredictorBacktestExportJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePredictorBacktestExportJobCommandOutput> {
    return deserializeAws_json1_1CreatePredictorBacktestExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}